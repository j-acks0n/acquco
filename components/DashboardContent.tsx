import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { v4 as uuidv4 } from "uuid";
import { XIcon } from "@heroicons/react/solid";
import Tabs from "./Tabs";
import HighGraph from "./HighGraph";
import Highcharts from "highcharts";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DashboardContent = ({ showTools, setShowTools }) => {
  // const [layouts, setLayouts] = useState({
  //   { i: "a", x: 0, y: 0, w: 1, h: 2 },
  //   { i: "b", x: 1, y: 0, w: 3, h: 2 },
  //   { i: "c", x: 4, y: 0, w: 1, h: 2 },
  //   { i: "d", x: 0, y: 2, w: 1, h: 2 },
  // });
  const [layouts, setLayouts] = useState<any>({
    lg: [
      { i: "a", x: 0, y: 0, w: 1, h: 5 },
      { i: "b", x: 1, y: 0, w: 1, h: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 4 },
      { i: "d", x: 0, y: 4, w: 1, h: 4 },
    ],
  });
  const [breakpoints, setBreakpoints] = useState({
    lg: 1200,
    md: 996,
    sm: 768,
    xs: 480,
    xxs: 0,
  });
  const [cols, setCols] = useState({ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 });

  const onAddItem = (type) => {
    /*eslint no-console: 0*/
    let height = 4;
    let width = 4;
    if (type === "revenue7Graph") {
      height = 12;
      width = 4;
    }
    setLayouts({
      // Add a new item. It must have a unique key!
      lg: layouts.lg.push({
        i: `${type}_uuidv4()`,
        x: (layouts.lg.length * 2) % 12,
        y: Infinity, // puts it at the bottom
        w: width,
        h: height
      }),
    });
  };
  const onBreakpointChange = (breakpoint, cols) => {
    setCols(cols);
    setBreakpoints(breakpoint);
  };

  const onRemoveItem = (i) => {
    setLayouts({
      // Add a new item. It must have a unique key!
      lg: layouts.lg.filter((item) => item.i !== i),
    });
  };

  const onLayoutChange = (layouts) => {
    for (let i = 0; i < Highcharts.charts.length; i += 1) {
      if (Highcharts.charts[i] !== undefined) {
        Highcharts.charts[i].reflow();
      }
    }
    setLayouts({ lg: layouts });
  };

  return (
    <div className="">
      {showTools && <Tabs onAddItem={onAddItem} />}

      {/* <div
        onClick={() => {
          onAddItem();
        }}
      >
        add
      </div> */}
      <ResponsiveReactGridLayout
        rowHeight={30}
        breakpoints={breakpoints}
        cols={cols}
        layouts={layouts}
        preventCollision={true}
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
      >
        {layouts.lg.map((itm, i) => (
          <div key={itm.i} data-grid={itm} className="block">
            <XIcon
              className="h-4 w-4 absolute right-2 top-0 cursor-pointer"
              onClick={() => {
                onRemoveItem(itm.i);
              }}
            />
            {itm.i.split("_")[0] === "revenue7Graph" && (
              <>
                <HighGraph type={2} />
              </>
            )}
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default DashboardContent;
// import { render } from "react-dom";

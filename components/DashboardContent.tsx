import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import { XIcon } from "@heroicons/react/solid";
import Tabs from "./Tabs";
import HighGraph from "./HighGraph";
import Highcharts from "highcharts";
import Card from "./Card";
import PieChart from "./PieChart";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DashboardContent = ({ layouts, setLayouts }) => {
  // const [layouts, setLayouts] = useState({
  //   { i: "a", x: 0, y: 0, w: 1, h: 2 },
  //   { i: "b", x: 1, y: 0, w: 3, h: 2 },
  //   { i: "c", x: 4, y: 0, w: 1, h: 2 },
  //   { i: "d", x: 0, y: 2, w: 1, h: 2 },
  // });

  const [breakpoints, setBreakpoints] = useState({
    lg: 1200
  });
  const [cols, setCols] = useState({ lg: 12 });

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
  console.log(layouts);
  return (
    <div className="">
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
              className="h-4 w-4 absolute right-2 top-0 cursor-pointer z-50"
              onClick={() => {
                onRemoveItem(itm.i);
              }}
            />
            {itm.i.split("_")[0] === "revenue7Graph" && (
              <>
                <HighGraph type={2} />
              </>
            )}
            {itm.i.split("_")[0] === "revenueToday" && (
              <>
                <Card name="Revenue Today" amount={120} />
              </>
            )}
            {itm.i.split("_")[0] === "revenue7display" && (
              <>
                <Card name="Revenue (7 days)" amount={1020} />
              </>
            )}

            {itm.i.split("_")[0] === "profit7Graph" && (
              <>
                <HighGraph type={1} />
              </>
            )}

            {itm.i.split("_")[0] === "top5sellers" && (
              <>
                <PieChart type={2} />
              </>
            )}

            {itm.i.split("_")[0] === "top5ads" && (
              <>
                <PieChart type={1} />
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

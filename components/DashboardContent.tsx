import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DashboardContent = () => {
  // const [layouts, setLayouts] = useState({
  //   { i: "a", x: 0, y: 0, w: 1, h: 2 },
  //   { i: "b", x: 1, y: 0, w: 3, h: 2 },
  //   { i: "c", x: 4, y: 0, w: 1, h: 2 },
  //   { i: "d", x: 0, y: 2, w: 1, h: 2 },
  // });
  const [layouts, setLayouts] = useState({
    lg: [
      { i: "a", x: 0, y: 0, w: 1, h: 5 },
      { i: "b", x: 1, y: 0, w: 1, h: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 4 },
      { i: "d", x: 0, y: 4, w: 1, h: 4 },
    ],
  });


  const onLayoutChange = (layouts) => {
    setLayouts({lg: layouts})
  }

  return (
    <div>
      <ResponsiveReactGridLayout
        rowHeight={30}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        layouts={layouts}
        preventCollision={true}
        onLayoutChange={onLayoutChange}
      >
        {layouts.lg.map((itm, i) => (
          <div key={itm.i} data-grid={itm} className="block">
            {i}
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default DashboardContent;
// import { render } from "react-dom";

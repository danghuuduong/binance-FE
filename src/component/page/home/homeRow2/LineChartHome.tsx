import React from "react";
import { TEChart } from "tw-elements-react";


const LineChartHome: React.FC = () => {
    return (
        <div className="">
            <div className="text-2xl font-medium ">The amount changes</div>
            <TEChart
                type="line"
                data={{
                    labels: [
                        "1032 $",
                        "1132 $",
                        "1062 $",
                        "1232 $",
                        "1432 $",
                        "8/1",
                        "9/1",
                        "9/1",
                        "9/1",
                        "9/1",
                        "9/1",
                        "9/1",
                        "9/1",
                        "9/1",
                        "9/1",
                        "9/1",
                        "9/1",
                        "9/1",
                        "9/1",
                        "9/1",
                        "9/1",
                    ],
                    datasets: [
                        {
                            label: "Traffic",
                            data: [1032, 1132, 1062, 1232, 1432, 1132, 1032, 1032, 1132, 1062, 1232, 1432, 1132, 1032, 1032, 1132, 1062, 1232, 2432, 1132, 1032],
                        },
                    ],
                }}
            />
        </div>
    );
}

export default LineChartHome
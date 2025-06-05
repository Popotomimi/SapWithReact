// Web Components React Example
import { Card, CardHeader, Text, Icon } from "@ui5/webcomponents-react";

// Web Components React Charts Example
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import lineChartIcon from "@ui5/webcomponents-icons/dist/line-chart.js";
import barChartIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";

// Hooks React
import { useState } from "react";
import ListComponent from "./Components/ListComponent";

const dataset = [
  {
    month: "January",
    data: 65,
  },
  {
    month: "February",
    data: 59,
  },
  {
    month: "March",
    data: 80,
  },
  {
    month: "April",
    data: 81,
  },
  {
    month: "May",
    data: 56,
  },
  {
    month: "June",
    data: 55,
  },
  {
    month: "July",
    data: 40,
  },
];

const MyApp = () => {
  const [toggleCharts, setToggleCharts] = useState("lineChart");
  const [loading, setLoading] = useState(false);

  const contentTitle =
    toggleCharts === "lineChart" ? "Line Chart" : "Bar Chart";

  const handleHeaderClick = () => {
    alert("Header clicked");
  };

  const handleHeaderClickGrafic = () => {
    if (toggleCharts === "lineChart") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("barChart");
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("lineChart");
      }, 2000);
    }
  };

  return (
    <div>
      <div>
        <ListComponent />
      </div>
      <div>
        <Card
          header={
            <CardHeader
              titleText="Titulo"
              interactive
              onClick={handleHeaderClick}
            />
          }
          style={{ width: "90%", margin: "25px auto", display: "block" }}>
          <Text
            style={{
              color: "red",
              padding: "var(--sapContent_Space_S)",
            }}>
            Conteudo dentro da TAG Text do UI com estilização no component e
            interação
          </Text>
        </Card>
      </div>
      <div>
        <Card
          header={
            <CardHeader
              titleText="Preços"
              subtitleText="Clique para trocar o grafico"
              interactive
              onClick={handleHeaderClickGrafic}
              avatar={
                <Icon
                  name={
                    toggleCharts === "lineChart" ? lineChartIcon : barChartIcon
                  }
                />
              }
            />
          }
          style={{ width: "90%", margin: "25px auto", display: "block" }}>
          <Text style={{ padding: "var(--sapContent_Space_S)" }}>
            Adicionando Graficos do UI5 Web Components React (LineChart e
            BarChart)
          </Text>

          <Text style={{ padding: "var(--sapContent_Space_S)" }}>
            {contentTitle}
          </Text>

          {toggleCharts === "lineChart" ? (
            <LineChart
              dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data", label: "Price" }]}
              dataset={dataset}
              loading={loading}
            />
          ) : (
            <BarChart
              dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data", label: "Price" }]}
              dataset={dataset}
              loading={loading}
            />
          )}
        </Card>
      </div>
    </div>
  );
};

export default MyApp;

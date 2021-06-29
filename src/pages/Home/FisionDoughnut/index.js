import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { buildDoughnutChart } from '../../../components/Helper';
import { ErrorBoundary } from "../../../components/ErrorBoundary";
import { data as _data } from "./data.js";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
const FisionDoughnut = ({ data, type, numberPrefix, showPercentValues }) => {
    return (
        <ReactFC 
            className="grid fusion-chart" 
            {...buildDoughnutChart(
                data ?  data : _data, 
                type, 
                numberPrefix, 
                showPercentValues
            )} 
        />
    )
}

export default ErrorBoundary(FisionDoughnut)

import { AbstractChartJS } from "./AbstractChartJS";
import ErrorBoundary from "../ErrorBoundary";


const SimpleChart = () => {

    const data = [
        {name:'january', v:'20'},
        {name:'february', v:'25'}
    ]

    return (
        <ErrorBoundary errorMessage={"Error while rendering Bar chart"}>
            <div>
                <AbstractChartJS type={"Bar"}
                data={data} accessorOptions={{yKey:'v'}}
                ></AbstractChartJS>
            </div>
        </ErrorBoundary>
    )

}

export { SimpleChart };
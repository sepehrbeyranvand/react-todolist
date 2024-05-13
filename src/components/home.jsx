import Cards from "./cards";
import Form from "./form";

export default function Home(){
    return(
        <div className="flex">
            <div className="basis-1/3 p-3">
                <Form></Form>
            </div>
            <div className="basis-2/3 p-3">
                <Cards></Cards>
            </div>
        </div>
    )}
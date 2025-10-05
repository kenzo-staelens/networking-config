import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

//why does shit break if certain lines are used for code?
import {rawData as raw1} from './rawData';
//import { rawData as raw2 } from "./raw2";
import './card.css'

const raws = {'raw1':raw1}

export default function CardObject(props) {
    const rawCards = raws[props.raw];
    
    return (
        <main>
            {rawCards.map((x) => (
                <div>
                    <Card className={x.color + " colorbar card"} id={(x.id ? x.id : "") + x.title} data-dataset={"var s = '';for(i of document.querySelectorAll('.card." + x.batch + "')){s+=i.children[1].children[1].innerText.replaceAll(/(.*)# */g,'')+'\\n'}"}>
                        <CardHeader title={x.title} />
                        <CardContent>
                            <Typography><p style={{ margin: 0, fontFamily: 'sans-serif', lineHeight: 1.2 }} class="trashclass">{
                                (x.description ? x.description : "").replace(/\*\*(.*?)\*\*/gm, '<strong>$1</strong>')
                                    .replace(/\*(.*?)\*/gm, '<i>$1</i>').replaceAll("\n", "<br/>")
                            }</p></Typography>
                            <code>
                                <pre style={{ margin: 0 }}>
                                    {(x.commands ? x.commands : '').replace(/(?![0-9]*\/[0-9]*\/)(\/.*\/)/gm, "<span class='textgreen'>$1</span>")}
                                </pre>
                            </code>
                        </CardContent>
                    </Card>
                    <br />
                </div>
            ))}
        </main>
    );
    
}

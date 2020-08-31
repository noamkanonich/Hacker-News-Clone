import React from "react";
import moment from "moment";

function Metadata(props) {

    function getTimeDiff() {
        var timeDiff = "";
        var currentTime = new Date();
        var postTime = new Date(props.time * 1000)
        var hours = moment.utc(moment(currentTime, "HH:mm:ss").diff(moment(postTime, "HH:mm:ss"))).format("HH")
        var mins = moment.utc(moment(currentTime, "HH:mm:ss").diff(moment(postTime, "HH:mm:ss"))).format("mm")

        if (hours === "00") {
            timeDiff = mins + " minutes";
        }
        else {
            if (Number(hours) >= 1 && Number(hours) <= 9) {
                timeDiff = hours.substring(1) + " hours";
            }
            else {
                timeDiff = hours + " hours";
            }
        }
        return timeDiff;
    }

    return (
        <td className="metadata">
            {props.score} points by {props.by} {getTimeDiff()} ago | hide | {props.comments} comments
        </td>
    );
}

export default Metadata;
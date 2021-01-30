import React from "react";
import { useInView } from "react-intersection-observer";
import { Timeline, TimelineProps } from "react-twitter-widgets";

type Props = {
    dataSource: TimelineProps["dataSource"];
    options: TimelineProps["options"];
}

function LazyTwitter(props: Props) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '200px 0px',
    })

    return (
        <div ref={ref}>
            {inView ? (
                <Timeline dataSource={props.dataSource} options={props.options} />
            ) : null}
        </div>
    )
};

export default LazyTwitter;
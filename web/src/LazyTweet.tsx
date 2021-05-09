import React from "react";
import { useInView } from "react-intersection-observer";

type Props = {
    url: string;
}

// function LazyTweet(props: Props) {
//     const [ref, inView] = useInView({
//         triggerOnce: true,
//         rootMargin: '200px 0px',
//     })

//     return (
//         <div ref={ref}>
//             {inView ? (
//                 <blockquote className="twitter-tweet">
//                     <a href={props.url}>Loading...</a>
//                 </blockquote>
//             ) : null}
//         </div>
//     )
// };

function LazyTweet(props: Props) {
    return (
        <blockquote className="twitter-tweet">
            <a href={props.url}>Loading...</a>
        </blockquote>
    )
};

export default LazyTweet;
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
    url: string;
}

function LazyTweet(props: Props) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '200px 0px',
    })

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    });

    return (
        <div ref={ref}>
            {inView ? (
                <blockquote className="twitter-tweet">
                    <a href={props.url}>ツイートを読み込んでいます...</a>
                </blockquote>
            ) : null}
        </div>
    )
};

// function LazyTweet(props: Props) {
//     return (
//         <blockquote className="twitter-tweet">
//             <a href={props.url}>Loading...</a>
//             <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
//         </blockquote>
//     )
// };

export default LazyTweet;
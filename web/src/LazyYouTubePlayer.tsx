import { useInView } from "react-intersection-observer";

type Props = {
    title: string;
    url: string;
}

function LazyYouTubePlayer(props: Props) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '200px 0px',
    })

    return (
        <div ref={ref} className="youtube-video">
            {inView ? (
                <iframe loading="lazy" title={props.title} src={props.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            ) : null}
        </div>
    )
};

export default LazyYouTubePlayer;
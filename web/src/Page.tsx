import { useEffect } from "react"

type Props = {
    title?: string;
    children: JSX.Element;
}

const Page = (props: Props) => {
    useEffect(() => {
        document.title = (props.title ? `${props.title} | ` : "") + "メリうた🐝 - メリッサ・キンレンカさんのお歌まとめ非公式ファンサイト";
    }, [props.title]);
    return props.children;
};

export default Page;
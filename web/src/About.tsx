import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const About = () => {
    return (
        <main>
            <Container maxWidth="lg" className="s-container">
                <Box lineHeight={1.7}>
                    <Typography component="h6" variant="h6">ℹ️ このサイトについて</Typography>
                    <ul>
                        <li>
                            <Link color="primary" href="https://nijisanji.ichikara.co.jp/">にじさんじ</Link>所属のバーチャルライバー、<Link color="primary" href="https://nijisanji.ichikara.co.jp/member/melissa-kinrenka/">メリッサ・キンレンカ</Link>さんの歌がもっと聴きたくて個人で作った非公式のお歌まとめファンサイトです。<br />
                            （歌枠は残らないことも多いので、基本的には一期一会を楽しみにしています）
                    </li>
                        <li>ゲーム配信も良いな、お料理配信やレシピも良いな… と思ったらコンテンツが増えていました。</li>
                        <li>
                            メリッサ・キンレンカさんをもっと知る、そのきっかけになれば幸いです。
                    </li>
                        <li>
                            参考：<Link color="primary" href="https://levi-archives.site/">レヴィ・エリファ アーカイブス</Link>
                        </li>
                    </ul>
                    <Typography>おことわり</Typography>
                    <ul>
                        <li>サムネイルの利用などは<Link color="primary" href="https://event.nijisanji.app/guidelines/">いちから 二次創作ガイドライン</Link>に準拠しています。</li>
                        <li>メンバー限定動画の情報は、メンバー以外でも閲覧できる内容に基づいて記載しています。</li>
                        <li>アーカイブが削除された場合は、確認次第このサイトからも削除することがあります。</li>
                        <li>アクセス分析のために Google Analytics を利用しています。 Cookie を使用したり、アクセスしたページを Google に送信することがあります。</li>
                        <li>迷惑になっているかもしれない、と感じたときはばっさり消えます。</li>
                    </ul>
                    <Typography>連絡先</Typography>
                    <ul>
                        <li>
                            開発・運営：たいぷらいた～ (Twitter: <Link color="primary" href="https://twitter.com/no_clock">@no_clock</Link>, Mail: <Link color="primary" href="mailto:typewriter.noclock@gmail.com">typewriter.noclock@gmail.com</Link>)
                    </li>
                        <li>
                            情報の誤りなどありましたら、<Link color="primary" href="https://marshmallow-qa.com/no_clock">マシュマロ</Link>か上記連絡先までこっそり教えていただけると助かります。
                        </li>
                    </ul>
                </Box>
            </Container>
        </main>
    );
}

export default About;
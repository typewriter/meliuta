import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";
import { Twitter, YouTube } from "@material-ui/icons";
import MaterialTable from "@material-table/core";
import './SongTable.css';
import { SongItem } from "./Song";
import { format } from "date-fns";

interface Props {
  songs: SongItem[];
}

function SongTable(props: Props) {
  return (
    <MaterialTable
      localization={{
        body: {
          emptyDataSourceMessage: (props.songs.length === 0 ? "読み込んでいます..." : "見つかりません"),
        },
        pagination: {
          labelDisplayedRows: "{from}-{to} / {count}",
          labelRowsSelect: "件ずつ",
        },
        toolbar: {
          searchTooltip: "検索",
          searchPlaceholder: "たとえば「アカペラ」",
        },
      }}
      options={{
        headerStyle: { whiteSpace: 'nowrap' },
        rowStyle: { whiteSpace: 'nowrap' },
        padding: 'dense',
        pageSize: 10,
        pageSizeOptions: [5, 10, 20, 50, 100],
        showTitle: false,
      }}
      columns={[
        {
          title: '', field: 'url', render: row => {
            if (row.url.includes("twitter.com")) {
              return <div><Link color="primary" href={row.url} rel="noopener" target="_blank"><Twitter style={{ verticalAlign: 'middle', display: 'inline-block', height: '48px' }} />ツイート</Link></div>;
            } else if (row.url.includes("youtube.com")) {
              return <div><Link href={row.url} color="primary" rel="noopener" target="_blank"><img src={row.thumbnailUrl} alt="" style={{ verticalAlign: 'middle', width: 64 }} /><YouTube style={{ verticalAlign: 'middle', display: 'inline-block' }} /></Link></div>;
            } else if (row.url.length > 0) {
              return <div><Link href={row.url} color="primary" rel="noopener" target="_blank">リンク</Link></div>;
            }
          }
        },
        {
          title: '種類', field: 'songType', render: row => <div>
            {
              row.songType.includes("メンバー") ? <Chip label="メンバー限定" color="primary" size="small" /> : <Chip label={row.songType} color="secondary" size="small" />
            }
            <br />
            {
              row.tag.includes("アカペラ") ? <Chip label="アカペラ" variant="outlined" color="primary" size="small" /> : ""
            }
            {
              row.tag.includes("オリジナル") ? <Chip label="オリジナル" variant="outlined" color="primary" size="small" /> : ""
            }
            {
              row.tag.includes("コラボ") ? <Chip label="コラボ" variant="outlined" color="primary" size="small" /> : ""
            }
          </div>,
        },
        { title: '曲名', field: 'originalSongTitle', render: row => <span dangerouslySetInnerHTML={{ __html: row.originalSongTitle }} /> },
        { title: 'アーティスト', field: 'originalArtist', render: row => <span dangerouslySetInnerHTML={{ __html: row.originalArtist }} /> },
        {
          title: '動画公開日', field: 'publishedAt', render: (row) => {
            if (row.url === "https://www.youtube.com/watch?v=5dvQVMRlT5A&t=7094") {
              return <div>2022/05/32</div>;
            }
            return <div>{format(row.publishedAt, 'yyyy/MM/dd')}</div>
          }
        },
        { title: '作詞作曲者など', field: 'originalCreator' },
        { title: 'タグ', field: 'tag' },
        { title: '動画タイトル', field: 'title' },
      ]}
      // detailPanel={row =>
      //   <iframe title={row.title} src={row.url.replace("watch?v=", "embed/").replace("&t=", "?start=")} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
      data={props.songs}
    />
  );
}

export default SongTable;
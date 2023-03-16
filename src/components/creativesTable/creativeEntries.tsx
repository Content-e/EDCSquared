import { BrandBrief } from "API";
import { FC, useMemo } from "react";
import { ICreativeEntry, ISelectredRequest } from "state/brandBrief";
import "./creativesTable.css";

interface Props {
  data?: Array<BrandBrief | null>;
  openCreative: (data: ISelectredRequest) => void;
}

export const CreativeEntries: FC<Props> = ({ data, openCreative }) => {
  const requests = useMemo(() => {
    const rqArray = [] as Array<ICreativeEntry>;
    data?.forEach((brief) => {
      brief?.creativeRequests?.items.forEach((req) => {
        if (req)
          rqArray.push({
            creativeLink: req?.tiktokCreativeUrl,
            creatorHandle: req?.creativeTiktokHandle,
            briefName: brief.BriefName,
            status: req?.status,
            id: req.id,
            videoLink: req.tiktokVideoCode,
            briefId: brief.id,
          });
      });
    });
    return rqArray;
  }, [data]);

  return (
    <>
      {requests.map((e) => (
        <tr>
          <td className="creatives-table-description">{e.briefName}</td>
          <td className="creatives-table-description">{e.creatorHandle}</td>
          <td className="creatives-table-description">{e.videoLink}</td>
          <td className="creatives-table-description">0</td>
          <td className="creatives-table-description">0%</td>
          <td className="creatives-table-description">{e.status}</td>
          <td
            onClick={(): void =>
              openCreative({ briefId: e.briefId, requestId: e.id })
            }
          >
            <img src="/images/table-search.svg" />
          </td>
        </tr>
      ))}
    </>
  );
};

export default CreativeEntries;
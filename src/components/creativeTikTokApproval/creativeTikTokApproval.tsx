import _ from 'lodash';
import { FC, useEffect, useState } from 'react';
import { CreativeRequestStatus, UnknownType } from 'utils';
import { CreativeRequest } from 'API';
import { ViewRequestProps, withRequestView } from 'state/requests';
import { Storage } from 'aws-amplify';
import Button from 'components/ui/button';
import Modal from 'components/ui/modal';
import Status from 'components/ui/status';
import Spinner from 'components/ui/spinner';

interface Props {
  request?: CreativeRequest | null;
  createAdPayload: UnknownType;
  inspiration?: Array<string | null> | null;
  onClose: () => void;
}
export const CreativeTikTokApproval: FC<Props & ViewRequestProps> = ({
  request,
  onClose,
  createAdPayload,
  approveRequest,
  rejectRequest,
  getVideoLink,
  loading,
  isSuccess,
  errorMsg,
  tiktokVideo,
}) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [awsURL, setAwsURL] = useState<string>('');

  const onOkay = async () => {
    if (isConfirmationOpen) approveRequest(createAdPayload);
  };
  const onApprove = () => {
    if (!isConfirmationOpen) setIsConfirmationOpen(true);
  };
  const onReject = () => {
    if (!isConfirmationOpen) rejectRequest();
  };

  useEffect(() => {
    if (request?.tiktokVideoCode) {
      getVideoLink(request.tiktokVideoCode);
    } else {
      Storage.get(`${request?.tiktokCreativeUrl}`)
        .then((data) => {
          console.log('AWS video URL:', data);
          setAwsURL(data);
        })
        .catch((err) =>
          console.log(`Failed to load ${request?.tiktokCreativeUrl}:`, err)
        );
    }
  }, [request, getVideoLink]);

  useEffect(() => {
    if (!loading && isSuccess) onClose();
  }, [loading, isSuccess, onClose]);

  return (
    <>
      <Modal
        title="Please confirm to add this creative to your live campaign"
        isOpen={isConfirmationOpen}
        handleClose={() => setIsConfirmationOpen(false)}
      >
        <p className="prose my-8">
          Clicking confirm below will add this creative to your campaign and
          will start spending.
        </p>
        {errorMsg && <p className="prose my-8 text-danger">{errorMsg}</p>}
        <div className="flex justify-center">
          <Button onClick={onOkay} isLoading={loading} disabled={loading}>
            Confirm
          </Button>
        </div>
      </Modal>

      <section className="paper">
        <h1 className="text-lg text-primary font-bold">Creative</h1>
        <div className="m-2 flex justify-center min-h-[750px]">
          {awsURL ? (
            <video controls className="outline-none" autoFocus autoPlay muted>
              <source src={awsURL} />
            </video>
          ) : _.isEmpty(tiktokVideo) ? (
            <div className="flex items-center">
              <Spinner className="w-8 h-8" />
            </div>
          ) : tiktokVideo.videoUrl ? (
            <iframe
              className="w-[325px] h-[740px] overflow-y-hidden"
              src={tiktokVideo?.videoUrl}
              name={`video-${tiktokVideo?.videoUrl}`}
              // eslint-disable-next-line max-len
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin"
            />
          ) : (
            <p className="prose text-danger font-bold">Failed to load TikTok</p>
          )}
        </div>
        <div className="flex justify-center mt-6">
          {
            // Hardcoded string because I don't trust CreativeRequestStatus enum, it's overriden on the backend anyway -_-
            request?.status === 'approved' ? (
              <p className="flex gap-2">
                <span>This request is in status:</span>
                <Status value={request.status} />
              </p>
            ) : (
              <div className="flex gap-4 md:flex-row flex-col">
                <Button onClick={onApprove}>Approve</Button>
                <Button
                  onClick={onReject}
                  disabled={request?.status === CreativeRequestStatus.Reject}
                  variant="secondary"
                >
                  Reject
                </Button>
              </div>
            )
          }
        </div>
      </section>
    </>
  );
};

export default withRequestView(CreativeTikTokApproval);

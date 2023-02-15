import { FC, useState } from "react";
import CustomModal from "./modal";

interface Props {
  onCancel: () => void;
  onInsertion: (text: string) => void;
}
export const PillarSuggestionModal: FC<Props> = (props) => {
  const [responseNames, setResponseNames] = useState<Array<string>>([]);
  const [loading, setLoading] = useState(false);

  const refreshResponse = (): void => {
    setLoading(true);
    setTimeout(() => {
      setResponseNames(["first name", "second name", "third name"]);
      setLoading(false);
    }, 5000);
  };

  return (
    <CustomModal
      {...props}
      title="Brand pillar suggestions"
      responses={responseNames}
      loading={loading}
      onRefresh={refreshResponse}
    />
  );
};

export default PillarSuggestionModal;

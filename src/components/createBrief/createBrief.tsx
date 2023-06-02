import Modal from "components/authentication/modal";
import Input from "components/ui/input";
import Label from "components/ui/label";
import Button from "components/ui/button";
import TextArea from "components/ui/textArea";
import useZodForm from "hooks/useZodForm";
import _ from "lodash";
import { FC, useMemo } from "react";
import { Link, useHistory } from "react-router-dom";
import { SaveBriefProps } from "state/brandBrief";
import withSaveBrief from "state/brandBrief/withSaveBriefHoc";
import { AuthRoutes } from "utils";
import { z } from "zod";
import init from "zod-empty";
import "./createBrief.css";
import Select from "components/ui/select";

const schema = z.object({
  BriefName: z.string().nonempty(), // TODO: wtf is this name, should be renamed to 'name'
  // tiktokHandle: z.string().nonempty(),
  // vertical: z.string().nonempty(),
  objective: z.string().nonempty(),
  brandBriefDetails: z.string().nonempty(), // TODO: rename -> details
  creativeInspirations: z.string().url().nullish().array(),
  active: z.boolean(),
  campaignId: z.string().nonempty(),
  adgroupId: z.string().nonempty(),
  status: z.string(),
});

const defaultValues = {
  ...init(schema),
  creativeInspirations: [null, null, null, null],
};

export const CreateBrief: FC<SaveBriefProps> = ({
  saveData,
  loading,
  response,
  briefState,
  // getAdGroups, // use campaignId to fetch
  // dataLoading,
  // listCampaigns,
}) => {
  const history = useHistory();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useZodForm({
    schema,
    defaultValues,
    mode: "all",
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    await saveData(
      _.omit(
        {
          ...data,
          creativeInspirations: data.creativeInspirations.filter(_.isString),
          vertical: "TODO",
          tiktokHandle: "TODO",
        },
        ["status"]
      )
    );
  });

  const headingText = useMemo(
    () => (briefState ? "Edit" : "Create"),
    [briefState]
  );

  return (
    <div>
      <div className="brand-dashboard__item">
        <div className="brand-dashboard__top">
          <div className="brand-dashboard__top-title">{headingText} Brief</div>
          <img
            className="brand-dashboard__top-icon"
            alt=""
            src="/images/dots.svg"
          />
        </div>
        <form onSubmit={onSubmit}>
          <div className="grid xl:grid-cols-3 p-6 xl:gap-8">
            <div className="xl:col-span-2 col-span-3">
              <Input
                required
                placeholder="Give your brief a name"
                name="BriefName"
                label="Brief Name"
                register={register}
                errors={errors}
              />
              <Select
                name="campaignId"
                label="Select TikTok campaign to link to"
                placeholder="Select an option"
                options={[
                  { text: "Fake option 1", value: "fake1" },
                  { text: "Fake option 2", value: "fake2" },
                ]}
                control={control}
                errors={errors}
              />
              <Input
                required
                name="adgroupId"
                label="Ad group"
                register={register}
                errors={errors}
              />
              <Input
                required
                name="objective"
                register={register}
                errors={errors}
              />
              <Input
                name="status"
                placeholder="This field is not used on the backend"
                label="Brief Status"
                register={register}
                errors={errors}
              />
            </div>
            <div className="xl:col-span-1 col-span-3 bg-[#f9fbfd] border-[#005F730D] border-[1px] p-4">
              <Label name="Creative inspiration" />
              {_.times(4).map((index) => (
                <Input
                  name={`creativeInspirations.${index}`}
                  className="mb-14 mt-8"
                  placeholder="Paste creative URL"
                  inputClassName="bg-white"
                  label=""
                  register={register}
                  errors={errors}
                />
              ))}
            </div>
          </div>
          <TextArea
            required
            className="pb-6 px-6"
            name="brandBriefDetails"
            label="Brief details"
            placeholder="Decsribe your brief in more detail..."
            register={register}
            errors={errors}
          />
          <div className="xl:hidden w-full px-6 pb-6"></div>
          <div
            className="
            flex sm:flex-row w-full sm:justify-center
            font-sans text-base text-white font-bold flex-col-reverse gap-4 items-center px-6"
          >
            <Link to={AuthRoutes.CampaignBrief}>
              <Button variant="secondary">CANCEL</Button>
            </Link>
            <Button
              type="submit"
              disabled={!isValid || !isDirty || isSubmitting}
              isLoading={isSubmitting}
            >
              SAVE BRIEF
            </Button>
          </div>
        </form>
      </div>
      <Modal
        content="Great, your brief has been saved!"
        isOpen={!!response && !loading}
        type="brand"
        handleClose={() => history.push(AuthRoutes.CampaignBrief)}
        actionLabel="BACK TO COMPAIGN BRIEFS"
        actionHandler={() => history.push(AuthRoutes.CampaignBrief)}
      />
    </div>
  );
};

export default withSaveBrief(CreateBrief);

import UploadDocuments from "./UploadDocuments";
import Layout from "../Layout";

const JobDetails: React.FC = (): JSX.Element => {
  return (
    <div className="bg-gray-200">
      <Layout children={<UploadDocuments />} />
    </div>
  );
};

export default JobDetails;

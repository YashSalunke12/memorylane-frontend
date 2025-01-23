import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

const App = () => {
  return (
    <>
      <Button
        varient="primary"
        size="md"
        startIcon={<PlusIcon size="md" />}
        text="share"
        onClick={() => {
          alert("helo");
        }}
      />
      <Button
        varient="secondary"
        size="lg"
        endIcon={<ShareIcon size="lg" />}
        text="add content"
        onClick={() => {}}
      />
    </>
  );
};

export default App;

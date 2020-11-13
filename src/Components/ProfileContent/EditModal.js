import React from "react";
import { Button, Icon, Image, Modal } from "semantic-ui-react";
import ProfileForm from "../ProfileForm/ProfileForm";

function EditModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
        <Button floated="right" color="green">
          <Image src="./Edit v1.svg" />
        </Button>
      }
    >
      <Modal.Header>Edit Profile</Modal.Header>
      <Modal.Content>
        <ProfileForm />
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          Cancel
          <Icon name="right cancel" />
        </Button>
        <Button color="blue" onClick={() => setOpen(false)}>
          Done <Icon name="right chevron" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default EditModal;

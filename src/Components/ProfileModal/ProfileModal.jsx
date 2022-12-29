import { Modal, useMantineTheme } from "@mantine/core";
import React from "react";
import "./ProfileModal.css";

const ProfileModal = ({ modalopened, setModalOpened }) => {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalopened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3 className="text-center font-semibold mb-8">Your Info / About</h3>
        <div>
          <input
            type="text"
            className="infoInput mb-3"
            name="FirstName"
            placeholder="First Name"
          />
          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
          />
          <div />
          <div>
            <input
              type="email"
              className="infoInput mb-3"
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput mb-3"
              name="address"
              placeholder="Lives In"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput mb-3"
              name="status"
              placeholder="Status"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput mb-3"
              name="institute"
              placeholder="School / University"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="works"
              placeholder="Works at"
            />
          </div>
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImg" className="my-3" id="" />
          </div>
          <div>
          Cover Image
          <input type="file" name="coverImg" id="" />
        </div>
        <button className="button px-4 py-2 my-3">Update</button>
      </form>
    </Modal>
  );
};

export default ProfileModal;

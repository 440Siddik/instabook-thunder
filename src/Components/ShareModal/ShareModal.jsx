import { Modal, useMantineTheme } from "@mantine/core";
import React from "react";
import PostShare from "../PostShare/PostShare";
import "./ShareModal.css";

const ShareModal = ({ modalopened, setModalOpened }) => {
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
      <PostShare />
    </Modal>
  );
};

export default ShareModal;

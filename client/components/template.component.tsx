import React from "react";
export const TemplateComponent = ({
  onClose = () => {},
  children,
  title = "Baity.exe",
}: {
  onClose?: () => void;
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div
      style={{
        backgroundColor: "#2f2f2f",
        border: "1px solid #444",
        borderRadius: "0.5em",
        position: "absolute",
        top: ".5em",
        left: ".5em",
        bottom: ".5em",
        right: ".5em",
        maxWidth: "100vw",
        maxHeight: "100vh",
        boxShadow: "0 0 1em #000",
      }}
    >
      <div
        style={{
          backgroundColor: "#ccc",
          display: "flex",
          justifyContent: "space-between",
          color: "#111",
          padding: "0.5em 1em",
          borderTopLeftRadius: "0.5em",
          borderTopRightRadius: "0.5em",
          fontWeight: "bold",
        }}
      >
        <span>{title}</span>
        <span style={{ cursor: "pointer" }} onClick={onClose}>
          X
        </span>
      </div>
      <div
        style={{
          overflowY: "scroll",
          maxHeight: "calc(100vh - 6em)",
          margin: "0 auto",
          paddingTop: "1em",
          paddingBottom: "1em",
        }}
      >
        {children}
      </div>
    </div>
  );
};

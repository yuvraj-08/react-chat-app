import React from "react";

function ContactName({ name }) {
  return (
    <div>
      <p style={styles.contactText}>{name}</p>
    </div>
  );
}
const styles = {
  contactText: {
    fontSize: "16px",
    color: "#000",
    marginBottom: "3px",
    fontWeight: "500",
  },
};
export default ContactName;
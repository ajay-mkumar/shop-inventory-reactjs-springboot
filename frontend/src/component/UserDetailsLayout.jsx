import styles from "./UserDetailsLayout.module.css";
const userDetails = { username: "ajay", shops: 4, products: 12 };

function UserDetailsLayout() {
  return (
    <div className={styles.userLayout}>
      <ul className={styles.userDetails}>
        {Object.entries(userDetails).map(([key, value], index) => (
          <li key={index}>
            <strong>{key}</strong> : {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDetailsLayout;

import styles from "./styles.module.css";

export default function DivScroll(props: any) {
	return <div className={styles.scrollable}>{props.children}</div>;
}

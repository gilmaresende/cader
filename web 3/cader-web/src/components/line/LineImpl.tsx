import styles from "./styles.module.css";

export default function LineImpl(props: any) {
	return <div className={styles.line}>{props.children}</div>;
}

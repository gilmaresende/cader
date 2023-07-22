import styles from "./styles.module.css";

export default function CardImpl(props: any) {
	return <div className={styles.card}>{props.children}</div>;
}

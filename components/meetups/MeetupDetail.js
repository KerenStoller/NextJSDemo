import classes from './MeetupDetail.module.css';

export default function MeetupDetail(props) {
  const { title, image, address, description } = props.props;
  return (
    <>
      <section className={classes.detail}>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <address>{address}</address>
        <p>{description}</p>
      </section>
    </>
  );
}

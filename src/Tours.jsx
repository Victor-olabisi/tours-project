import Tour from "./Tour"

const Tours = ({tours, deleteTour}) => {
    return (
        <section className="tours">
            {tours.map((tour) => {
                return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />
            })}
            {/* <Tour tours={tours} /> */}
      </section>
  )
}
export default Tours


const Paragraph = () => {
    const isRaining = false
  return (
    <div>
      {isRaining? <h1>it is raining</h1>: <h1>it is not raining</h1>}
    </div>
  )
}

export default Paragraph

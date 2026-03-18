const Notification = ({ message, isError }) => {
  if (message === null) {
    return null
  }

  const messageType = isError ? "error" : "non-error"

  return (
    <div className={messageType}>
      {message}
    </div>
  )
}

export default Notification
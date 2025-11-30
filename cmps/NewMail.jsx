const { useState } = React

export function NewMail ({ onClose }) {

  function onCloseCompose(ev) {
    ev.stopPropagation()
    onClose()
  }

  function onMinimize(ev) {
    ev.stopPropagation()
    setIsMinimized(prev => !prev)
  }

  const [isMinimized, setIsMinimized] = useState(false)

  return (
    <section className={`compose-window ${isMinimized ? "minimized" : ""}`}
    title="Minimize">
      <header className="compose-header"
      onClick={() => setIsMinimized(prev => !prev)}>
        <span>New Message</span>

        <div className="compose-actions">
          <button >–</button>
          <button className="expand"
          title="Full screen">⤢</button>
          <button onClick={(ev) => onCloseCompose(ev)}
            title="Close">✕</button>
        </div>
      </header>

      {!isMinimized && (
        <div className="compose-body">
          <input type="text" placeholder="Recipients" />
          <input type="text" placeholder="Subject" />
          <textarea></textarea>
        </div>
      )}

      {!isMinimized && (
        <footer className="compose-footer">
          <button className="send" title="Send">Send</button>
          <button className="delete trash-btn"
          title="Discard draft">
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </footer>
      )}
    </section>
  )
}

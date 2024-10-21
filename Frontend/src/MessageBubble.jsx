const UserInputBubble = ({user}) => {
  return(
    <>
      <div className="max-w-[70%] ml-auto">
        <div className="text-right mb-10 p-2 bg-green-100 rounded-lg">
          {user.image && <img className="h-40 w-50" src={user.image}/>}
          {user.message}
        </div>
      </div>
    </>
  )
}

const BotMessageBubble = ({bot}) => {
  return(
    <>
      <div className="max-w-[60%] mr-auto">
        <pre className="text-left bg-slate-200 rounded-lg p-2 text-wrap"
        style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>
          {bot.message}
        </pre>
      </div>
    </>
  )
}

export {
  UserInputBubble,
  BotMessageBubble
}

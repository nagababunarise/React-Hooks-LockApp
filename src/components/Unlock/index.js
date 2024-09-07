import {useState} from 'react'

import {BgContainer, LockImage, Paragraph, Button} from './styledComponents'

const Unlock = () => {
  const [isLock, setIsLock] = useState(false)
  const btnText = !isLock ? 'Unlock' : 'Lock'

  const onLockToggle = () => {
    setIsLock(prev => !prev)
  }
  return (
    <BgContainer>
      {!isLock ? (
        <LockImage
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png "
          alt="lock"
        />
      ) : (
        <LockImage
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png "
          alt="unlock"
        />
      )}
      {!isLock ? (
        <Paragraph>Your Device is Locked</Paragraph>
      ) : (
        <Paragraph>Your Device is Unlocked</Paragraph>
      )}
      <Button onClick={onLockToggle}>{btnText}</Button>
    </BgContainer>
  )
}
export default Unlock

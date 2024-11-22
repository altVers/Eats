import { FC } from "react";
type Props = {
    src: string
}

export const UserProfile: FC<Props> = ({src}) => {
    return (
        <div className="profile">
          <a href="#">
            <img alt="profile" src={src} />
          </a>
        </div>
    )
}
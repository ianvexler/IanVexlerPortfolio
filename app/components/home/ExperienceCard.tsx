import classNames from "classnames";
import { HTMLAttributes, PropsWithChildren } from "react";

interface ExperienceCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string,
  icon: string
}

const ExperienceCard = ({title, icon, children, className, ...rest}: ExperienceCardProps) => {
  return (
    <div 
      className={classNames(
        "experience-entry d-flex",
        className
      )}
      {...rest}
    >
      <div className="px-2 pe-4 h-100 pt-2">
        <i className={`bi bi-${icon} fs-1`} />
      </div>

      <div className="">
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  )
}

export default ExperienceCard;
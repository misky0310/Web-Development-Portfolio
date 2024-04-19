
const ContentWrapper = ({children}) => {
  return (
    <div className="wrapper max-w-[1280px] mx-auto flex flex-col items-center justify-center">
        {children}
    </div>
  )
}

export default ContentWrapper
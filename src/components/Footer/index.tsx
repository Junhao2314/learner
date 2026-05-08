const Footer: React.FC = () => {
  return (
    <>
      <footer className="mb-1 mt-4 flex w-full items-center justify-center gap-2.5 text-sm ease-in" onClick={(e) => e.currentTarget.blur()}>
        <a
          className="cursor-pointer text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
          href="https://github.com/RealKai42/qwerty-learner"
          target="_blank"
          rel="noreferrer"
        >
          基于 Qwerty Learner
        </a>
      </footer>
    </>
  )
}

export default Footer

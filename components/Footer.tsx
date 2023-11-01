const navigation = {
  main: [
    {
      name: 'プライバシーポリシー',
      href: 'https://daffy-hamburger-7f6.notion.site/The-ANARCHY-e9f8e016536640ea8cee8b22aafbc8de?pvs=4'
    },
  ],
}

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pt-20 sm:pt-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} target="_blank" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; The ANARCHY. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

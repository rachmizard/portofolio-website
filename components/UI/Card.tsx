type Props = {
     children: React.ReactNode
}

export default function Card(props: Props) {
     return (
          <div className="bg-dark transition-all duration-700 rounded w-full sm:w-8/12 md:w-4/12 px-6 py-8 h-full">
               {props.children}
          </div>
     )
}

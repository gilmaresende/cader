function Card(props: any) {
   return (
      <div>
         <div className="card mb-3">
            {props.children}
         </div>
      </div>

   );
}

export default Card;

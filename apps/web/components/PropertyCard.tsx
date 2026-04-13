export default function PropertyCard({ title, price }: { title: string; price: string }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <p>{price} USDC/month</p>
    </div>
  )
}

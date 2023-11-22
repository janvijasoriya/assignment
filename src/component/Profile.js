function Profile() {
  return (
    <div className="w-96 h-20 relative">
      <div className="w-96 h-12 left-0 top-[33px] absolute opacity-50 bg-gradient-to-r from-neutral-700 to-black rounded-2xl border border-cyan-400" />
      <div className="w-60 h-12 left-0 top-[33px] absolute bg-gradient-to-t from-cyan-400 to-blue-600 rounded-2xl" />
      <div className="left-[64px] top-[52px] absolute text-zinc-900 text-base font-medium font-['Poppins']">
        Level 1
      </div>
      <div className="left-0 top-0 absolute text-zinc-200 text-2xl font-medium font-['Poppins']">
        Mr Dabba Person
      </div>
      <img
        className="w-12 h-12 left-0 top-[33px] absolute rounded-2xl border border-cyan-400"
        src="/assets/profile.png"
      />
    </div>
  )
}

export default Profile

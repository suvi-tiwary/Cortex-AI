import React from 'react';
import { FaHamburger } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux"
import { addConversation } from '../redux/conversationSlice';
import api from '../features/axios';

const Sidebar = () => {
  const dispatch = useDispatch()
  const createConversation = async()=>{
    try {
      let data = await api.get("/create-coversation")
      dispatch(addConversation(data))

    } catch (error) {
      console.log(`create coversation fetching error ${error}`)
    }
  }
  
  return (
    <div className='w-[270px] h-screen flex flex-col
      bg-[#0a0a0f]/80 backdrop-blur-xl 
      border-r border-white/[0.08]
      shadow-2xl shadow-black/50'>
      
      {/* Header */}
      <div className='flex items-center gap-3 p-4'>
        <FaHamburger size={24} color='white' className='cursor-pointer hover:opacity-70 transition-opacity'/>
        <h1 className='font-bold text-white text-[22px] tracking-tight'>Cortex AI</h1>
      </div>

      {/* Divider */}
      <div className='w-full h-[1px] bg-white/[0.08]'></div>
       
      {/* New Chat Button */}
      <div className='p-4' onClick={()=>createConversation()}>
        <button className='w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 
          hover:from-violet-500 hover:to-fuchsia-500
          rounded-xl flex items-center justify-center gap-2
          transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 
          active:scale-[0.98] p-3 text-white font-semibold text-sm'>
          + New Chat
        </button>
      </div>

      {/* Recent Conversations Label */}
      <div className='px-4 pb-2'>
        <span className='text-white/40 text-[11px] font-semibold uppercase tracking-wider'>
          Recent Conversations
        </span>
      </div>

      {/* Conversations Area (flex-1 pushes footer down) */}
      <div className='flex-1 overflow-y-auto px-2 custom-scrollbar'>
        {/* Add your conversation items here later */}
      </div>

      {/* Footer - Always at bottom */}
      <div className='p-4 border-t border-white/[0.08]'>
        <div className='flex items-center justify-between'>
          <button className='flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors w-full'>
            <div className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center'>
              <CgProfile size={20} color='white' />
            </div>
            <span className='text-white/80 text-sm font-medium'>Profile</span>
          </button>
          
          <button className='p-2 rounded-xl hover:bg-red-500/10 transition-colors ml-2'>
            <FiLogOut size={20} color='#ef4444' />
          </button>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }
      `}</style>
    </div>
  );
};

export default Sidebar;
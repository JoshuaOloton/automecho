import FileUpload4 from '@/components/file-upload-dropzone-4'
import FileUpload6 from '@/components/file-upload-dropzone-6'
import { Button } from '@/components/ui/button'
import { ClipboardClock, IdCard, MapPin, Lock } from 'lucide-react'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-4/5 mx-auto font-sans py-10 bg-[#F9F9FE]'>
      <div className="">
        <h2 className="text-4xl font-semibold mb-4">Identity Verification</h2>
        <p className="text-black/70">
          To enjoy a premium rental experience, please upload your KYC documents. This process usually takes less than 2 minutes.
        </p>
      </div>
      <div className='px-6 py-4 bg-[#E2E8F7] flex items-center gap-4 rounded-lg mt-10'>
        <ClipboardClock size={30} color='white' className='bg-primary p-2 rounded-lg' />
        <div className='flex flex-col flex-1'>
          <h4 className='font-semibold text-lg'>Pending Review</h4>
          <p className='text-black/70'>Your documents are being securely processed. We'll notify your account status is updated.</p>
        </div>
        <span className='rounded-lg bg-white px-3 py-2 text-xs text-black/70'>EST: 24h</span>
      </div>
      <div className='mt-16 space-y-10'>
        <div className='bg-white p-8 rounded-lg shadow-lg'>
          <div className='flex items-center gap-4 mb-6'>
            <IdCard size={40} className='text-primary bg-[#E2E8F7] p-2 rounded-lg' />
            <div className='flex flex-col flex-1'>
              <h4 className='font-semibold text-2xl'>National ID (NIN) or Passport</h4>
              <p className='text-black/70'>Clear photo of the front of your document</p>
            </div>
          </div>
          <FileUpload6 classname='max-w-none' />
        </div>

        <div className='bg-white p-8 rounded-lg shadow-lg'>
          <div className='flex items-center gap-4 mb-6'>
            <MapPin size={40} className='text-primary bg-[#E2E8F7] p-2 rounded-lg' />
            <div className='flex flex-col flex-1'>
              <h4 className='font-semibold text-2xl'>Proof of Address</h4>
              <p className='text-black/70'>Utility bill or bank statement (issued in the last 3 months)</p>
            </div>
          </div>
          <FileUpload6 classname='max-w-none' />
        </div>

        <hr />

        <div className='flex items-center'>
          <div className='flex flex-1 items-center gap-2 text-black/70'>
            <Lock size={12} />
            Your data is safe and secure with us.
          </div>
          <Button type='submit' className='uppercase px-10 py-5'>Submit Verification</Button>
        </div>
      </div>
    </div>
  )
}

export default page
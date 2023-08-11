import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function Terms() {
    return (
        <Card className='aboutUsCard'>
            <CardContent sx={{ marginTop: "1px" }}>
                <Typography variant='h2' className='aboutUsTitle'>
                    Terms of Service
                </Typography>
                <Typography variant='body1' sx={{ marginTop: "40px", textAlign: "justify" }}>
                    Thank you for visiting Just Mom Things  at www.justmomthings.com, a website and blog owned and managed by Just Mom Things, Inc. All references in these Terms of Use/Disclaimer to Just Mom Things,  are to Just Mom Things, Inc, including its members, officers, employees, agents, and representatives.

                    By accessing, using, downloading, and/or browsing information on the website, blog, podcast, videos, newsletters, social media, webinars, or any other products offered by Just Mom Things  (hereafter referred to as Just Mom Things  content) you acknowledge your understanding and agreement to all the following:

                    The Just Mom Things  content only provides general information that may or may not apply to your personal health condition or circumstances. The opinions expressed in Just Mom Things  content by any Just Mom Things  team members or volunteers on behalf of Just Mom Things  are strictly their own personal opinions and not the opinions or policies of any third party, including any health care provider, employer, educational or medical institution, professional association or charitable organization. Nothing in the Just Mom Things  content constitutes or shall be construed as constituting medical or legal advice of any kind whatsoever, whether from a licensed medical professional or otherwise; nor is it a substitute for professional medical advice, diagnosis and treatment. If you need legal or healthcare advice or information, seek out a suitably qualified professional licensed to practice where you live.

                    There is no substitute for the relationship between a medical professional and his or her patient. See your treating physician, osteopath, nurse practitioner, midwife or other qualified health care provider regarding any questions you have about your personal health and any medical condition you may have, including a pregnancy. No information found on this website or blog should be relied or acted upon by you without first consulting your own treating healthcare provider. NEVER disregard professional medical advice or delay seeking it because of something you have read/listened to/watched in Just Mom Things  content. If you think you may have a medical emergency, call your doctor or 911 immediately. Reliance upon any content provided by Just Mom Things  is solely at your own risk.

                    Just Mom Things  reserves the right, at our sole discretion, to change, modify, revise, or discontinue any webpage, service, term, or condition contained in Just Mom Things  content. Any change, modification, revision, or discontinuation will become effective immediately upon the posting on our Site. Please frequently review the terms and conditions included within our Site. Your subsequent use of Just Mom Things  content after any change, modification, revision, or discontinuation will constitute your acceptance of any new, modified, revised, discontinued content, terms, or conditions within our Site. Your use of our Just Mom Things  content constitutes your assent to follow and be legally bound to all of the terms and conditions included within our Site. If you disagree with any of the terms or conditions of our Site, please do not use Just Mom Things  content. By using Just Mom Things  content, you further agree that your use will be made in accordance with any governing laws, and your use will not interfere with the Site nor be used for any illegal or improper purpose.
                </Typography>
            </CardContent>
        </Card>
    );

}

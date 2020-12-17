import Input from '../../components/input';
import Button from '../../components/button';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import Card from '../../components/card';
import SplitPage from '../../views/split-page';

const NewHobby = () => {
    const [profileBase64, setProfileBase64] = useState();
    const [bannerBase64, setBannerBase64] = useState();

    const title = 'New Hobby.';

    return (
        <SplitPage title={title}>
            <SplitPage.Center>
                <SplitPage.Center.Header title={title} />
                <Card className="flex flex-col mt-4">
                    <div className="flex flex-col mt-2">
                        <label>Hobby URL (Can't be changed.)</label>
                        <Input />
                    </div>

                    <div className="flex flex-col mt-2">
                        <label>Hobby Name</label>
                        <Input />
                    </div>

                    <div className="flex flex-col mt-2">
                        <label>Description</label>
                        <Input />
                    </div>

                    <Dropzone>
                        {({ getRootProps, getInputProps }) => (
                            <section className="mt-4">
                                <p>Profile Image</p>
                                <div
                                    className="py-12 rounded border cursor-pointer hover:bg-gray-100"
                                    {...getRootProps()}
                                >
                                    <input {...getInputProps()} />
                                    <p className="text-center">Drop a hobby image here, or click to select a file.</p>
                                </div>
                            </section>
                        )}
                    </Dropzone>

                    <Dropzone>
                        {({ getRootProps, getInputProps }) => (
                            <section className="mt-4">
                                <p>Banner Image</p>
                                <div
                                    className="py-12 rounded border cursor-pointer hover:bg-gray-100"
                                    {...getRootProps()}
                                >
                                    <input {...getInputProps()} />
                                    <p className="text-center">Drop a banner image here, or click to select a file.</p>
                                </div>
                            </section>
                        )}
                    </Dropzone>

                    <Button className="mt-4 ml-auto" variant="primary">
                        Create
                    </Button>
                </Card>
            </SplitPage.Center>
        </SplitPage>
    );
};

export default NewHobby;

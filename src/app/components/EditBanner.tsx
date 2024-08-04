'use client'
import React, { useState, useEffect } from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Box, MenuItem, Select, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import { EditProp } from '../interfaces/EditProp';
// List of available images
const availableImages = [
  { label: 'Image 1', value: '/images/image1.jpg' },
  { label: 'Image 2', value: '/images/image2.jpg' },
  { label: 'Image 3', value: '/images/image3.jpg' },
];

const EditBanner: React.FC<EditProp> = ({ open, onClose, banner, onSave }) => {
  const [editedBanner, setEditedBanner] = useState(banner);

  useEffect(() => {
    setEditedBanner(banner);
  }, [banner]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedBanner({
      ...editedBanner,
      [name]: value,
    });
  };

  const handleSelectChange = (e: SelectChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setEditedBanner({
      ...editedBanner,
      [name as string]: value,
    });
  };

  const handleColorChange = (name: string) => (color: any) => {
    setEditedBanner({
      ...editedBanner,
      [name]: color.hex,
    });
  };

  const handleSave = () => {
    onSave(editedBanner);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Banner</DialogTitle>
      <DialogContent>
        <Box padding={2}>
          <TextField
            label="Title"
            name="title"
            value={editedBanner.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={editedBanner.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="CTA"
            name="cta"
            value={editedBanner.cta}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Image</InputLabel>
            <Select
              name="image"
              value={editedBanner.image || ''}
              onChange={handleSelectChange}
            >
              {availableImages.map((img) => (
                <MenuItem key={img.value} value={img.value}>
                  {img.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Background Image URL"
            name="background"
            value={editedBanner.background}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Image Orientation</InputLabel>
            <Select
              name="imageOrientation"
              value={editedBanner.imageOrientation || 'center'}
              onChange={handleSelectChange}
            >
              <MenuItem value="top-left">Top Left</MenuItem>
              <MenuItem value="top-right">Top Right</MenuItem>
              <MenuItem value="bottom-left">Bottom Left</MenuItem>
              <MenuItem value="bottom-right">Bottom Right</MenuItem>
              <MenuItem value="center">Center</MenuItem>
            </Select>
          </FormControl>
          <Box margin="normal">
            <InputLabel>Text Color</InputLabel>
            <TextField
            label="Text Color"
            name="textColor"
            value={editedBanner.textColor || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          </Box>
          <Box margin="normal">
            <InputLabel>Button Color</InputLabel>
            <TextField
            label="Button Color"
            name="buttonColor"
            value={editedBanner.buttonColor || 'primary'}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditBanner;

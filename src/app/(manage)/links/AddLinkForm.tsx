"use client";

import { useFieldArray, useForm } from "react-hook-form";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Plus } from "lucide-react";

import Button from "@/components/ui/Button";
import SortableLink from "./SortableLink";
import { type Link } from "@/lib/types";
import { useLinkStore } from "@/store/useLinkStore";
import { useEffect } from "react";

type FormData = {
  links: Link[];
};

function AddLinkForm() {
  const links = useLinkStore((state) => state.links);
  const reorderLinks = useLinkStore((state) => state.reorderLinks);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      links: links,
    },
  });

  const { fields, move, append, remove } = useFieldArray({
    control,
    name: "links",
  });

  useEffect(() => {
    const subscription = watch((value) => {
      reorderLinks(value as Link[]);
    });

    return () => subscription.unsubscribe();
  }, []);

  const addLink = () => {
    append({ id: Date.now().toString(), platform: "GitHub", url: "" });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = fields.findIndex((field) => field.id === active.id);
      const newIndex = fields.findIndex((field) => field.id === over?.id);
      move(oldIndex, newIndex);
      reorderLinks(fields.map((field) => field as Link));
    }
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <div>
        <Button
          block
          variant="secondary"
          type="button"
          onClick={addLink}
          className=" mb-8"
        >
          <p className="font-semibold flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add new link
          </p>
        </Button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={fields}
              strategy={verticalListSortingStrategy}
            >
              {fields.map((field, index) => (
                <SortableLink
                  key={field.id}
                  link={field}
                  index={index}
                  control={control}
                  errors={errors}
                  remove={remove}
                />
              ))}
            </SortableContext>
          </DndContext>

          <Button
            type="submit"
            className="w-full mt-6 bg-primary hover:bg-primary/90"
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddLinkForm;
